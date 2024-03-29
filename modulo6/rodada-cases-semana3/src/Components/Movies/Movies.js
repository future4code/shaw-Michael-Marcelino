import { format } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'
import { BASE_IMAGE_URL } from '../../Constants/base_url'
import ErrorIcon from '@mui/icons-material/Error';
import {
  Card,
  MovieTitle,
  MovieDate
} from './style'

 const Movie = (props) => {
  return (
    <Card>
      {props.imagePath ? (
        <img
          src={`${BASE_IMAGE_URL}original/${
            props.imagePath ? props.imagePath : ''
          }`}
          alt={props.title}
        />
      ) : (
        <ErrorIcon/>
      )}
      <MovieTitle>{props.title ? props.title : ''}</MovieTitle>
      <MovieDate>
        {props.dateRelease
          ? format(new Date(props.dateRelease), 'dd MMM yyyy', { locale: ptBR })
          : ''}
      </MovieDate>
    </Card>
  )
}
export default  Movie