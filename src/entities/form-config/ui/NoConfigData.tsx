import { Card, CardContent } from '@/shared/ui';

const NoConfigData = () => {
  return (
    <Card className="min-h-[300px] flex items-center justify-center">
      <CardContent>
        <h1 className="text-center font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Add your form configuration to the config and you'll see the generated
          form here!
        </h1>
      </CardContent>
    </Card>
  );
};

export default NoConfigData;
