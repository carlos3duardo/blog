import moment from 'moment';
import 'moment/dist/locale/pt-br';

export function timeAgo(date: string) {
  moment.locale('pt-br');

  return moment(date).fromNow();
}
