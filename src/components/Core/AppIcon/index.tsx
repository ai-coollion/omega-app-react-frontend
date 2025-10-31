import AddIcon from '@/assets/icons/add.svg'
import Add2Icon from '@/assets/icons/add2.svg'
import DownIcon from '@/assets/icons/arrowdown.svg'
import ArrowHoriIcon from '@/assets/icons/arrowhori.svg'
import UpIcon from '@/assets/icons/arrowup.svg'
import CloseIcon from '@/assets/icons/close.svg'
import ClothesIcon from '@/assets/icons/clothes.svg'
import CommentIcon from '@/assets/icons/comment.svg'
import DeleteIcon from '@/assets/icons/delete.svg'
import FlagIcon from '@/assets/icons/flag.svg'
import GithubIcon from '@/assets/icons/github.svg'
import IssueIcon from '@/assets/icons/issue.svg'
import LoveIcon from '@/assets/icons/love.svg'
import MenuIcon from '@/assets/icons/menu.svg'
import MetaMaskIcon from '@/assets/icons/metamask.svg'
import OmegaIcon from '@/assets/icons/omega.svg'
import OmegaCoinIcon from '@/assets/icons/omegacoin.svg'
import PendingIcon from '@/assets/icons/pending.svg'
import PhantomIcon from '@/assets/icons/phantom.svg'
import PlayIcon from '@/assets/icons/play.svg'
import PresentIcon from '@/assets/icons/present.svg'
import SettingIcon from '@/assets/icons/setting.svg'
import SolflareIcon from '@/assets/icons/solflare.svg'
import SortIcon from '@/assets/icons/sort.svg'
import SubmitIcon from '@/assets/icons/submit.svg'
import SuccessIcon from '@/assets/icons/success.svg'
import TaoIcon from '@/assets/icons/tao.svg'
import Tao2Icon from '@/assets/icons/tao2.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import UploadIcon from '@/assets/icons/upload.svg'
import VerifyIcon from '@/assets/icons/verify.svg'
import VideoIcon from '@/assets/icons/video.svg'
import WalletIcon from '@/assets/icons/wallet.svg'
import { colors } from '@/theme/themePrimitives'
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'
import ImageIcon from '@mui/icons-material/Image'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PauseIcon from '@mui/icons-material/Pause'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import { Stack } from '@mui/material'
import { memo } from 'react'

const ICON_MAPS = {
  down: DownIcon,
  video: VideoIcon,
  love: LoveIcon,
  setting: SettingIcon,
  tao2: Tao2Icon,
  menu: MenuIcon,
  close: CloseIcon,
  omega: OmegaIcon,
  clothes: ClothesIcon,
  play: PlayIcon,
  delete: DeleteIcon,
  tao: TaoIcon,
  twitter: TwitterIcon,
  issue: IssueIcon,
  add: AddIcon,
  add2: Add2Icon,
  search: SearchRoundedIcon,
  sort: SortIcon,
  pending: PendingIcon,
  flag: FlagIcon,
  circleDot: AdjustRoundedIcon,
  comment: CommentIcon,
  present: PresentIcon,
  verify: VerifyIcon,
  submit: SubmitIcon,
  github: GithubIcon,
  success: SuccessIcon,
  star: StarOutlineRoundedIcon,
  more: MoreHorizIcon,
  arrowhori: ArrowHoriIcon,
  omegaCoin: OmegaCoinIcon,
  signin: LoginRoundedIcon,
  logout: LogoutRoundedIcon,
  signup: GroupAddOutlinedIcon,
  project: AssignmentOutlinedIcon,
  task: TaskOutlinedIcon,
  profile: ManageAccountsOutlinedIcon,
  image: ImageIcon,
  up: UpIcon,
  video2: VideocamOutlinedIcon,
  verify2: TaskAltOutlinedIcon,
  pause: PauseIcon,
  metamask: MetaMaskIcon,
  phantom: PhantomIcon,
  solflare: SolflareIcon,
  people: ManageAccountsIcon,
  upload: UploadIcon,
  notification: NotificationsNoneOutlinedIcon,
  wallet: WalletIcon
}

export type IconType = keyof typeof ICON_MAPS

interface Props {
  name: keyof typeof ICON_MAPS
  size?: number | string
  color?: keyof typeof colors
}

const AppIcon = ({ name, size = 24, color, ...props }: Props) => {
  const IconComponent = ICON_MAPS[name]
  if (!IconComponent) {
    console.log(`Icon ${name} not found`)

    return null
  }

  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        color: color && colors[color],
        '& svg':
          (typeof size === 'number' && size > 0) || (typeof size === 'string' && String(size).length > 0)
            ? {
                width: size,
                height: size
              }
            : {}
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}

export default memo(AppIcon)
