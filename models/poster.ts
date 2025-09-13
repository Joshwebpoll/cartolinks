export interface PosterType {
  id: string;
  title: string;
  subtitle?: string;
  type: string;
  image?: string;
  backgroundColor: string;
  textColor: string;
  isSelected?: boolean;
  badge?: string;
}

export  const posterTypes: PosterType[] = [
    {
      id: "1",
      title: "New Limited Collection",
      type: "Display",
      backgroundColor: "#8B4513",
      textColor: "#FFFFFF",
      image:"/assets/images/promo.jpg"
    },
    {
      id: "2",
      title: "Up to 50% Off",
      type: "Promotion",
      backgroundColor: "#6B7280",
      textColor: "#FFFFFF",
    },
    {
      id: "3",
      title: "Interior Design",
      type: "Branding",
      backgroundColor: "#1F2937",
      textColor: "#FFFFFF",
      badge: "Editor's Choice",
    },
    {
      id: "4",
      title: "",
      type: "Announcement",
      backgroundColor: "#06B6D4",
      textColor: "#FFFFFF",
      isSelected: true,
    },
    {
      id: "5",
      title: "",
      type: "Business",
      backgroundColor: "#D97706",
      textColor: "#FFFFFF",
    },
  ];