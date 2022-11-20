import {
  SvgIconComponent,
  Home as HomeIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Group as GroupIcon,
  Task as TaskIcon,
  EventNote as EventNoteIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  HowToReg as HowToRegIcon,
} from '@mui/icons-material';

export enum RouteGroup {
  CommonTop = 0,
  UserTop = 1,
  VisitorTop = 2,
  Outer = 3,
  UserBottom = 4,
}

export class RoutePath {
  public static readonly Home = new RoutePath(
    RouteGroup.CommonTop,
    ['/', null],
    '홈',
    HomeIcon,
    false,
  );

  public static readonly SignIn = new RoutePath(
    RouteGroup.VisitorTop,
    ['/signin', null],
    '로그인',
    LoginIcon,
    false,
  );

  public static readonly SignUp = new RoutePath(
    RouteGroup.VisitorTop,
    ['/signup', null],
    '회원가입',
    HowToRegIcon,
    false,
  );

  public static readonly SignOut = new RoutePath(
    RouteGroup.UserBottom,
    ['/signout', null],
    '로그아웃',
    LogoutIcon,
    false,
  );

  public static readonly Teams = new RoutePath(
    RouteGroup.UserTop,
    ['/teams', ':teamId'],
    '팀 목록',
    GroupIcon,
    false,
  );

  public static readonly Tasks = new RoutePath(
    RouteGroup.UserTop,
    ['/tasks', ':taskId'],
    '사업 목록',
    TaskIcon,
    false,
  );

  public static readonly Events = new RoutePath(
    RouteGroup.UserTop,
    ['/events', ':userId'],
    '시간 관리',
    EventNoteIcon,
    false,
  );

  public static readonly GitHub = new RoutePath(
    RouteGroup.Outer,
    ['https://github.com/STDTE-repo', null],
    'GitHub',
    GitHubIcon,
    true,
  );

  public static readonly Contact = new RoutePath(
    RouteGroup.Outer,
    [
      'https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=choewy32@gmail.com',
      null,
    ],
    '이메일 문의',
    EmailIcon,
    true,
  );

  public constructor(
    private readonly group: number,
    public readonly url: [string, string | null],
    public readonly text: string,
    public readonly Icon: SvgIconComponent,
    public readonly isBlank: boolean,
  ) {}

  public static findByGroup(group: RouteGroup): RoutePath[] {
    const descriptors = Object.getOwnPropertyDescriptors(this);
    return Object.values(descriptors).reduce<RoutePath[]>((prev, current) => {
      if (current.value instanceof RoutePath && current.value.group === group) {
        prev.push(current.value);
      }

      return prev;
    }, []);
  }
}
