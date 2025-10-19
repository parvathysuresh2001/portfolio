import Link from "next/link";
import { BlurImage } from "../ui/blur-image";

type MenuGroup = {
  id: string;
  name: string;
  menuItems: TechItem[];
};

type ItemGridProps = {
  stackGroups: MenuGroup[];
};

const ItemGrid = ({ stackGroups }: ItemGridProps) => {
  return (
    <div className="space-y-12">
      {stackGroups.map((group) => (
        <div key={group.id}>
          <h2 className="mb-4 text-2xl font-bold">{group.name}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {group.menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="shadow-xs flex gap-6 rounded-lg border p-4 no-underline transition-colors hover:bg-zinc-100 sm:flex-col sm:gap-3 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <BlurImage
                  src={item.imagePath}
                  width={256}
                  height={256}
                  alt={item.name}
                  className="shrink-0"
                  imageClassName="m-0 size-24 sm:h-full sm:w-full"
                />
                <div className="flex flex-col justify-center gap-2">
                  <div className="text-lg font-extrabold">{item.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;