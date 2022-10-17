import { styled } from './settings';
import { theme } from '../theme';

// breakpoint: 920px

export const Container = styled('div', {
  backgroundColor: theme.colors.gray_900,
  height: '100%',
});

export const Header = styled('header', {
  backgroundColor: theme.colors.gray_800,
  minHeight: '6.25rem',
  paddingTop: '1.25rem',
  paddingBottom: '1.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const HeaderText = styled('h1', {
  fontSize: '1.5rem',
  color: theme.colors.white,
  fontWeight: '700',
  marginLeft: '1rem',
});

export const Main = styled('div', {
  marginTop: '2rem',
  px: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@bp1': {
    px: '5rem',
  },
  '@bp2': {
    flexDirection: 'inherit',
    px: '10rem',
    alignItems: 'flex-start',
  },
});

export const SideBar = styled('div', {
  backgroundColor: theme.colors.gray_800,
  height: '18.5rem',
  width: '16rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '400',
  color: theme.colors.gray_400,
  marginBottom: '1rem',
  '@bp2': {
    marginBottom: 0,
  },
});

export const Section = styled('div', {
  backgroundColor: theme.colors.gray_800,
  width: '100%',
  borderRadius: '0.5rem',
  padding: '2.5rem',
  marginBottom: '2rem',
  '@bp2': {
    marginLeft: '2rem',
  },
});

export const SectionHeader = styled('div', {
  marginBottom: '1.5rem',
  fontSize: '0.875rem',
  fontWeight: '400',
  color: theme.colors.gray_400,
  display: 'flex',
});

export const AvatarImg = styled('img', {
  padding: '0.2rem',
  border: `solid 0.1rem ${theme.colors.green_500}`,
  borderRadius: '0.5rem',
});

export const AvatarInfo = styled('div', {
  marginLeft: '1rem',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
});

export const AvatarName = styled('h4', {
  color: theme.colors.gray_100,
  fontSize: '1rem',
  fontWeight: '700',
});

export const SectionText = styled('p', {
  fontSize: '1rem',
  fontWeight: '400',
  color: theme.colors.gray_100,
  paddingBottom: '1.5rem',
  borderBottom: `solid 1px ${theme.colors.gray_600}`,
});

export const SectionLink = styled('a', {
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: '700',
  color: theme.colors.green_500,
});

export const SectionFeedback = styled('div', {
  marginTop: '1.5rem',
});

export const LetYourFeedback = styled('p', {
  color: theme.colors.gray_100,
  fontSize: '1rem',
  fontWeight: '700',
});

export const FeedbackInput = styled('textarea', {
  backgroundColor: theme.colors.gray_900,
  fontWeight: '400',
  fontSize: '1rem',
  color: theme.colors.gray_500,
  padding: '1rem',
  width: '100%',
  height: '6rem',
  marginTop: '1rem',
  border: '0.5rem',
  resize: 'none',
  br: '0.5rem',
  '&:focus': {
    outline: 'none',
    border: ` 2px solid ${theme.colors.green_500}`,
    br: '0.5rem',
    transition: '0.5s',
  },
});

export const Posts = styled('div', {
  padding: '0  2.5rem 2.5rem 2.5rem',
});

export const Post = styled('div', {
  paddingTop: '2.5rem',
  display: 'flex',
});

export const RightContent = styled('div', {
  width: '100%',
  marginLeft: '1rem',
});

export const PostContent = styled('div', {
  backgroundColor: theme.colors.gray_700,
  borderRadius: '0.5rem',
  width: '100%',
  height: '7.5rem',
  padding: '1rem',
});

export const UserName = styled('p', {
  color: theme.colors.gray_100,
  fontWeight: '700',
  fontSize: '0.875rem',
});

export const You = styled('a', {
  color: theme.colors.gray_400,
  fontWeight: '700',
  fontSize: '0.875rem',
  cursor: 'initial',
});

export const FeedbackTimeInfo = styled('p', {
  color: theme.colors.gray_400,
  fontWeight: '400',
  fontSize: '0.75rem',
});

export const PostText = styled('p', {
  marginTop: '1rem',
  color: theme.colors.gray_300,
  fontWeight: '400',
  fontSize: '0.875rem',
});

export const PostImg = styled('img', {
  height: '50px',
  width: '50px',
});

export const Like = styled('div', {
  marginTop: '1rem',
  display: 'flex',
  alignItems: 'center',
});

export const LikeButton = styled('input', {
  opacity: '0',
});
export const LikeText = styled('label', {
  fontWeight: '700',
  marginLeft: '0.625rem',
  display: 'flex',
  alignItems: 'center',
});
export const LikeCount = styled('div', {
  color: theme.colors.gray_400,
  marginLeft: '0.4rem',
  fontWeight: '700',
});

export const BackgroundImg = styled('img', {
  borderRadius: '0.5rem 0.5rem 0 0 ',
});

export const HeaderContent = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  top: '-1.9rem',
});

export const EditButton = styled('button', {
  padding: '1rem 1.5rem',
  color: theme.colors.green_500,
  fontSize: '1rem',
  fontWeight: '700',
  backgroundColor: 'transparent',
  border: `solid 1px ${theme.colors.green_500}`,
  borderRadius: '0.5rem',
  marginTop: '1.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.colors.green_500,
    color: theme.colors.white,
    transition: 'color 0.1s',
    '& svg': {
      color: theme.colors.white,
    },
  },
  '& svg': {
    color: theme.colors.green_500,
  },
});

export const PublishButton = styled('button', {
  padding: '1rem 1.5rem',
  backgroundColor: theme.colors.green_500,
  borderRadius: '0.5rem',
  fontWeight: '700',
  fontSize: '1rem',
  color: theme.colors.white,
  marginTop: '1rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.green_300,
    transition: 'color 0.1s',
  },
});
