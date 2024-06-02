import { useRouter } from 'next/router';

export default function Name() {
  const router = useRouter();
  return <div>hi! {router.query.name}</div>
}