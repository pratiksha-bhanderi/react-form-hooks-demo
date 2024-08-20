import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ProductItem, RootState, useAppDispatch } from "../../utils/types";
import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { defaultProductFormValue } from "../../utils/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../utils/schema";
import InputControl from "../../components/InputControl";
import { addProductActions } from "../../store/actions/productActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
export default function AddProductScreen() {
  const { productList } = useSelector(({ product }: RootState) => product);
  const fileUploadRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const methods = useForm<ProductItem>({
    defaultValues: defaultProductFormValue,
    resolver: yupResolver(productSchema),
    mode: "all",
  });
  const onsubmit = (formValue: ProductItem) => {
    console.log("ProductItem", formValue);
    dispatch(addProductActions(formValue));
    // methods.reset(defaultProductFormValue);
  };
  const uploadImageDisplay = async () => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    // setAvatarURL(cachedURL);
    methods.setValue("thumbnail", cachedURL);
  };
  console.log("fwergertwer", productList);

  return (
    <FormProvider {...methods}>
      <Stack sx={{ alignItems: "center" }}>
        {productList.map((input, index) => {
          return (
            <>
              <Accordion sx={{ width: "90%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Product {index + 1}
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    flexDirection={"row"}
                    sx={{ justifyContent: "center", alignItems: "center" }}
                    spacing={2}
                  >
                    <Grid
                      container
                      md={5}
                      item
                      sx={{
                        justifyContent: "center",
                        marginTop: 2,
                        alignSelf: "center",
                      }}
                    >
                      <input
                        type="file"
                        onChange={uploadImageDisplay}
                        id="file"
                        ref={fileUploadRef}
                        style={{ display: "none" }}
                      />
                      <label htmlFor="file">
                        <Grid
                          item
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            border: 1,
                            borderRadius: 2,
                            borderColor: "gray",
                          }}
                          width={"300px"}
                          height={"200px"}
                          flexDirection={"column"}
                          borderColor={"palegreen"}
                          display={"inline-flex"}
                        >
                          {!methods.watch("thumbnail") ? (
                            <>
                              <img
                                src={
                                  "https://icones.pro/wp-content/uploads/2021/08/icone-photo-grise.png"
                                }
                                style={{
                                  height: 100,
                                  width: 100,
                                }}
                                alt=""
                              />
                              <Typography
                                component="h1"
                                variant="body2"
                                sx={{ alignSelf: "center" }}
                              >
                                Add Images
                              </Typography>
                            </>
                          ) : (
                            <img
                              src={methods.watch("thumbnail")}
                              style={{
                                height: "100%",
                                width: "100%",
                              }}
                              alt=""
                            />
                          )}
                        </Grid>
                      </label>
                    </Grid>
                    <Grid
                      container
                      item
                      spacing={2}
                      md={5}
                      sx={{ justifyContent: "center" }}
                    >
                      <Grid item xs={6}>
                        <InputControl name={"title"} label={"Title"} required />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"category"}
                          label={"Category"}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl name={"brand"} label={"Brand"} required />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl name={"stock"} label={"Stock"} required />
                      </Grid>
                      <Grid item xs={12}>
                        <InputControl
                          name={"description"}
                          label={"Description"}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"returnPolicy"}
                          label={"Return Policy"}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"warrantyInformation"}
                          label={"Warranty Information"}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"price"}
                          label={"Price"}
                          type={"number"}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl name={"sku"} label={"Sku"} required />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"availabilityStatus"}
                          label={"Availability Status"}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"shippingInformation"}
                          label={"Shipping Information"}
                          required
                        />
                      </Grid>
                      <Button
                        variant="contained"
                        sx={{ width: "110px", alignSelf: "center", mt: 2 }}
                        onClick={methods.handleSubmit(onsubmit)}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Box
                sx={{
                  pl: 1,
                  pr: 1,
                  pt: 1,
                  pb: 0.5,
                  backgroundColor: "#01a0e1",
                  borderRadius: 5,
                }}
              >
                <AddIcon sx={{ color: "white" }} />
              </Box>
              {/* <img src={AddIcon} style={{ height: 10, width: 10 }} alt="" /> */}
            </>
          );
        })}
      </Stack>
    </FormProvider>
  );
}
