import { EnvelopeClosedIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Building, Phone } from "lucide-react";

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

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }: UserCardProps) => {
  return (
    <div
      key={user.id}
      className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
    >
      {/* Header Section */}
      <div className="bg-blue-500 text-white p-6">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-sm">@{user.username}</p>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Phone */}
        <div className="flex items-center text-gray-700">
          <Phone className="text-blue-500 mr-2" />
          <span>{user.phone}</span>
        </div>

        {/* Email */}
        <div className="flex items-center text-gray-700">
          <EnvelopeClosedIcon className="text-blue-500 mr-2" />
          <span>{user.email}</span>
        </div>

        {/* Website */}
        <div className="flex items-center text-gray-700">
          <GlobeIcon className="text-blue-500 mr-2" />
          <span>{user.website}</span>
        </div>

        {/* Company */}
        <div className="flex items-center text-gray-700">
          <Building className="text-blue-500 mr-2" />
          <span>{user.company.name}</span>
        </div>

        {/* Company CatchPhrase and BS */}
        <p className="text-gray-500 text-sm">{user.company.catchPhrase}</p>
        <p className="text-gray-500 text-sm">{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
