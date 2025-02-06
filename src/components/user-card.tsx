import { Mail, Phone, Globe, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps): JSX.Element {
  return (
    <TooltipProvider>
      <Card className="mx-auto w-full max-w-xs">
        <CardHeader className="space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <Avatar className="size-10">
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{user.name}</CardTitle>
              <p className="text-xs text-muted-foreground">@{user.username}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-2 text-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center">
                <Mail className="mr-1 size-3" />
                <span className="truncate">{user.email}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{user.email}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center">
                <Phone className="mr-1 size-3" />
                <span className="truncate">{user.phone}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{user.phone}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center">
                <Globe className="mr-1 size-3" />
                <span className="truncate">{user.website}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{user.website}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center">
                <MapPin className="mr-1 size-3" />
                <span className="truncate">{user.address.city}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${user.address.street}, ${user.address.city}`}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="col-span-2 flex items-center">
                <Briefcase className="mr-1 size-3" />
                <span className="truncate">{user.company.name}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{user.company.name}</p>
              <p className="text-xs text-muted-foreground">
                {user.company.catchPhrase}
              </p>
            </TooltipContent>
          </Tooltip>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
