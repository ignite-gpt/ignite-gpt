import { Button, Center } from 'native-base';

export default function Page() {
  return (
    <Center height='100%' width='100%'>
      <Button onPress={() => console.log('Hello world')}>Hello world</Button>
    </Center>
  );
}
