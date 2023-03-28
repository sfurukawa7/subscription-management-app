import { useRouter } from "next/router";

export const useTableRow = (id: string) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail/${id}`);
  };

  return { handleClick };
};
