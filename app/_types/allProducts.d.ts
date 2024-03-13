export interface AllProducts {
  id: number;
  attributes: {
    title: string;
    price: string;
    description: {
      children: {
        text: string;
      }[];
    }[];
    category: string;
    available: boolean;
    banner: {
      data: {
        id: number;
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}
[];
