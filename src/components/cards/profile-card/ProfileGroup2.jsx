import PropTypes from 'prop-types';
// @mui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/***************************  CARD - PROFILE GROUP 2  ***************************/

export default function ProfileGroup2({ avatarList, rating, totalReviews, starColor }) {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: 'center', gap: 1, bgcolor: 'grey.300', borderRadius: 8, width: 'fit-content', p: 0.75, pr: 1.5 }}
    >
      <AvatarGroup
        max={5}
        spacing="small"
        sx={{ '.MuiAvatar-colorDefault': { bgcolor: 'primary.main' }, '.MuiAvatar-root': { borderWidth: '1px' } }}
      >
        {avatarList.map((avatar, index) => (
          <Avatar alt="Avatar" src={avatar} key={index} slotProps={{ img: { loading: 'lazy' } }} />
        ))}
      </AvatarGroup>
      <Stack>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.1}
            readOnly
            size="small"
            {...(starColor && { sx: { '&.MuiRating-root': { color: starColor } } })}
          />
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: -0.25 }}>
            {rating.toFixed(1)}
          </Typography>
        </Stack>
        <Typography variant="subtitle1">from {totalReviews} reviews</Typography>
      </Stack>
    </Stack>
  );
}

ProfileGroup2.propTypes = {
  avatarList: PropTypes.array,
  rating: PropTypes.number,
  totalReviews: PropTypes.string,
  starColor: PropTypes.string
};
