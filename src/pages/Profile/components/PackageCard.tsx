import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

interface PackageCardProps {
  name: string;
  type: "ELITE" | "PREMIUM" | "DELUXE";
  startDate: Date;
  endDate: Date;
  description: string;
}

const PackageCard = ({ name, type, startDate, endDate, description }: PackageCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "ELITE":
        return "bg-purple-500";
      case "PREMIUM":
        return "bg-gold-500";
      case "DELUXE":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Badge className={`${getTypeColor(type)} text-white`}>
            {type}
          </Badge>
        </div>
        <CardDescription>
          {format(startDate, "dd MMMM yyyy", { locale: tr })} -{" "}
          {format(endDate, "dd MMMM yyyy", { locale: tr })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PackageCard; 