import Button from '../Button';
import NavWrapper from './index.styles';
import { saveToImage } from '../../utils/util';

function Nav({ name}) {
  return (
    <NavWrapper>
      <Button customClass='save' onClick={() => saveToImage(name)}>
        Save Image
      </Button>
    </NavWrapper>
  );
}

export default Nav;
