import { useStore } from "@/auth/store/count.store";
import { Button } from "@/components/ui/button";

export const ProductPage = () => {
  const { count, increment, decrement, increaseBy } = useStore();

  return (
    <>
      <h1>ProductPage</h1>
      <div className="text-3xl font-montserrat">{count}</div>
      <Button variant="default" size="sm" className="ml-2" onClick={increment}>
        +1
      </Button>
      <Button variant="default" size="sm" className="ml-2" onClick={decrement}>
        -1
      </Button>
{      <Button
        variant="default"
        size="sm"
        className="ml-2"
        onClick={() => increaseBy(5)}
      >
        +5
      </Button>}
    </>
  );
};
