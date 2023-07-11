import { Progress } from 'antd';
import AntProgress from './styles/progress.style';
import WithDirection from '@tminds/lib/helpers/rtl';
const WDProgress = AntProgress(Progress);
const isoProgress = WithDirection(WDProgress);

export default isoProgress;
