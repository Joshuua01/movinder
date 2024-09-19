import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start bg-background">
      <nav className="my-5 flex w-3/4 items-center justify-between">
        <h1 className="text-3xl font-bold">Movinder</h1>
        <div>
          <Button variant={"default"}>Sign in</Button>
        </div>
      </nav>
      <main className="flex w-1/2 flex-1 flex-col items-center justify-center gap-20">
        <h2 className="text-center text-7xl font-bold">
          Welcome to the <br /> Movinder application!
        </h2>
        <p className="text-center font-medium leading-7 text-muted-foreground">
          <span className="font-bold">
            Tired of endless scrolling and indecision?
          </span>
          {"  "}
          Gather your friends, family, or partner and find the perfect movie to
          watch, effortlessly. With our innovative sliding interface, choosing a
          movie has never been more fun or collaborative. Simply swipe right on
          movies you like, left on those you don&apos;t, and let our app do the
          rest.
        </p>
        <Button size={"lg"} variant={"default"}>
          <span className="text-lg">Start swiping now!</span>
        </Button>
      </main>
    </div>
  );
}
