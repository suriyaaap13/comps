import Button from '../components/Button';
import { GoBell, GoCloudUpload } from 'react-icons/go';

export default function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          <GoBell className='mr-1'/>
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoCloudUpload/>
          Add to Cart
        </Button>
      </div>
      <div>
        <Button danger>
          Add to Whislist
        </Button>
      </div>
      <div><Button secondary outline>Account</Button></div>
      <div><Button success rounded>Checkout</Button></div>
      
    </div>
  )
}
