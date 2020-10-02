import { InferProps } from 'prop-types';

export type InferPropTypes<
  PropTypes,
  DefaultProps = Record<string, unknown>,
  Props = InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key]
};
