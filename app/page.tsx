import Button from "@mui/joy/Button";
import Image from 'next/image';
import Hero from './Hero@2x.webp';

export default function Page() {
    return <div>
        <div>
            <Image src={Hero} alt="logo" sizes="100vw" style={{
                width: '100%',
                height: 'auto',
            }} />
        </div>
    </div>
}
