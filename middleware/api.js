import axios from 'axios';
import { butter } from '~/utils/butterCMS';

export default function ({ route }) {
  console.log('call');
  return butter.post.list({page: 1, page_size: 10}).then(function(response) {
    console.log(response)
  })
}