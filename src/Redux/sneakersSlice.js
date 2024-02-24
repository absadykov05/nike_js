import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    [
      {
        title: "Nike AIr Force 1'07 WB",
        price: "135",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zjrheo7cjgrv6opt8txu/air-force-1-07-wb-mens-shoes-txRBM6.png",
      },
      {
        title: "Nike Air Force 1'07",
        price: "125",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72c30bcb-c38d-4629-92c9-7107f1d951e0/air-force-1-07-mens-shoes-jmqJQT.png",
      },
      {
        title: "Nike Air Force 1'07",
        price: "115",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-jBrhbr.png",
      },
      {
        title: "Nike Air Force 1'07 EasyOn",
        price: "115",
        gender: 1,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a77350cd-fdb7-450f-8d3b-4a6999bf6db3/air-force-1-07-easyon-womens-shoes-q2Nz01.png",
      },
      {
        title: "Nike Air Force 1'07",
        price: "120",
        gender: 1,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b27b0e09-4e19-4f9d-82c7-bb58c4922c62/air-force-1-07-womens-shoes-PqdxJw.png",
      },
    ],
    [
      {
        title: 'Air Jordan 3 Retro Craft "Ivory"',
        price: "210",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/76543f5c-d339-40db-8cf4-dc56beb45026/air-jordan-3-retro-craft-ivory-mens-shoes-R60dgp.png",
      },
      {
        title: "Air Jordan 1 Mid",
        price: "125",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-7645f306-08aa-4aee-9d18-61c9e3f103d9/air-jordan-1-mid-shoes-MVp2kJ.png",
      },
      {
        title: "Air Jordan 1 Low",
        price: "110",
        gender: 1,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8316629e-531a-4750-bc3a-a66cbab08f66/air-jordan-1-low-womens-shoes-7fbNqc.png",
      },
      {
        title: "Air Jordan 1 Low",
        price: "115",
        gender: 1,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf36545d-5fb4-4c97-a7ea-c159c1b704c4/air-jordan-1-low-womens-shoes-Bz4GT4.png",
      },
      {
        title: "Air Jordan 1 Mid SE",
        price: "135",
        gender: 1,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/514300f5-1ca7-4988-b235-a6e353090849/air-jordan-1-mid-se-womens-shoes-spwLJ0.png",
      },
    ],
    [
      {
        title: "Air Max Dn",
        price: "160",
        gender: 1,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f50070d2-77a3-4213-aebf-9371d9759548/air-max-dn-mens-shoes-27XkSQ.png",
      },
      {
        title: "Air Max 1",
        price: "140",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4927f3e2-b271-4255-844b-772b66ba9f66/air-max-1-mens-shoes-2C5sX2.png",
      },
      {
        title: "Air Max Ishod",
        price: "110",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02d793e4-3ab7-41c4-bd43-cabe64fe6ae9/air-max-ishod-mens-shoes-DwRtpQ.png",
      },
      {
        title: "Air Max 90",
        price: "130",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71dcb3f8-76cf-4bae-8fa0-e16bc6f2872c/air-max-90-mens-shoes-Bd2qnn.png",
      },
      {
        title: "Air Max 90",
        price: "130",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baa2520d-49da-4a27-ab2c-7fb133fb3008/air-max-90-mens-shoes-6n3vKB.png",
      },
      {
        title: "Nike Air VaporMax Plus",
        price: "210",
        gender: 0,
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/tlrzjqnfgwpl0eoqthqh/air-vapormax-plus-mens-shoes-nC0dzF.png",
      },
    ],
  ],
  types: ['Air Force 1', 'Jordan', 'Air Max'],
  sneakerType: 0,
};

export const SneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setSneakerType: (state, action) => {
      state.sneakerType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSneakerType } = SneakersSlice.actions;

export default SneakersSlice.reducer;
