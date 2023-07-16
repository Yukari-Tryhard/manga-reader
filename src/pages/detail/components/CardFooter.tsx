import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";

export default function CardFooter() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <Avatar className="drop-shadow-2xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-2">
          <p className="text-xs">Tác giả</p>
          <p className="text-sm">Được dịch bởi Tínkerbell</p>
        </div>
      </div>
      <Button className="text-lg p-4 px-8 rounded-full">Đọc từ đầu</Button>
    </div>
  );
}
