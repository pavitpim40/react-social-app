import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// eslint-disable-next-line react/prop-types
export default function PostItem({ title, body }) {
  return (
    <Card sx={{ maxWidth: 450, textAlign: 'left' }}>
      {/* Header */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />

      {/* Media : รูปภาพ */}
      <CardMedia
        component='img'
        height='194'
        image='https://cdn.pixabay.com/photo/2019/06/29/04/00/fisherman-4305368_1280.jpg'
        alt='Paella dish'
      />
      {/* Content : เนื้อหา */}
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {body}
        </Typography>
      </CardContent>

      {/* Action : Like Share */}
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
