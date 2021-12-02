import { ICON_TYPES } from '../../utils/constants/icons'
import { FONT_SIZES } from '../../utils/constants/sizes'
import { COLORS } from '../../utils/constants/colors'
import { CSSProperties } from 'react'

interface IIcon {
  name: string
  size?: string
  color?: string
  style?: CSSProperties
  onIconClick?: React.MouseEventHandler<SVGElement>
}

const Icon = ({
  name,
  size = 'base',
  color = 'WHITE',
  onIconClick,
  ...style
}: IIcon): JSX.Element => {
  const { [size]: fontSize } = FONT_SIZES
  const { [name]: IconTag } = ICON_TYPES
  const { [color]: fontColor } = COLORS

  return (
    <IconTag
      onClick={onIconClick}
      style={{ fontSize, color: fontColor, ...style }}
    />
  )
}

export default Icon
