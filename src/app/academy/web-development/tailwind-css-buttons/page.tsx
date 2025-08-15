import { CardComponent } from "@/components/card-component";
import { ButtonIcon } from "@radix-ui/react-icons";
import { BUTTONS } from "./buttons";

const TailwindcssButton = () => {
  return (
    <div className="relative mt-20 mx-auto min-h-screen w-full max-w-screen-lg border-l-neutral-50 border-r-neutral-50 dark:border-l-neutral-800 dark:border-r-neutral-800 px-2 pb-12 sm:border-l sm:border-r md:px-6 bg-white dark:bg-neutral-900">
      <main>
        <section className="pt-8">
          <div className="flex flex-col items-start">
            <div className="mb-6 flex w-full items-center justify-between">
              <div className="rounded-full bg-neutral-950 dark:bg-white px-2">
                <ButtonIcon className="h-4 w-4 text-white dark:text-neutral-950" />
              </div>
            </div>
            <div className="mb-6">
              <h1 className="mb-1 text-xl font-medium text-neutral-900 dark:text-white">
                buttons.devkins
              </h1>
              <div className="text-neutral-800 dark:text-neutral-200">
                <p>
                  {`Discover a collection of Tailwind CSS buttons designed to enhance your
                  website's look.`}
                </p>
                <p>Easy to integrate with a copy-paste, no js</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {BUTTONS?.map((Comp) => {
              return (
                <CardComponent key={Comp.name}>
                  <Comp />
                </CardComponent>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TailwindcssButton;
