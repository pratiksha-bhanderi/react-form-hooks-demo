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
import { ProductList, useAppDispatch } from "../../utils/types";
import { useEffect, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  defaultProductFormValue,
  defaultProductListFormValue,
} from "../../utils/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../utils/schema";
import InputControl from "../../components/InputControl";
import { addProductActions } from "../../store/actions/productActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useDropzone } from "react-dropzone";
export default function AddProductScreen() {
  const dispatch = useAppDispatch();
  const [addMore, setAddMore] = useState(-1);
  const [imageIndex, setImageIndex] = useState(-1);
  const methods = useForm<ProductList>({
    defaultValues: defaultProductListFormValue,
    resolver: yupResolver(productSchema),
    mode: "all",
  });
  const { control } = methods;

  const onsubmit = (formValue: ProductList) => {
    dispatch(
      addProductActions(formValue.product[formValue.product.length - 1])
    );
    setAddMore(formValue.product.length - 1);
  };

  const { append } = useFieldArray({
    control,
    name: "product",
  });
  const onAddMore = async () => {
    append(defaultProductFormValue);
    setAddMore(-1);
  };
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];
      const cachedURL = URL.createObjectURL(uploadedFile);

      methods.setValue(`product.${imageIndex}.thumbnail`, cachedURL);
      setImageIndex(-1);
    }
  }, [acceptedFiles, imageIndex, methods]);
  return (
    <FormProvider {...methods}>
      <Stack sx={{ alignItems: "center" }}>
        {methods.watch(`product`).map((input, index) => {
          return (
            <>
              <Accordion key={index} sx={{ width: "90%", mb: 1 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={"panel1-header" + index}
                >
                  {input.title ? input.title : `Product ${index + 1}`}
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    flexDirection={"row"}
                    sx={{ justifyContent: "center", alignItems: "center" }}
                    spacing={2}
                  >
                    <Grid
                      {...getRootProps({ className: "dropzone" })}
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
                        {...getInputProps()}
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="file"
                        onClick={() => setImageIndex(index)}
                      >
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
                          {!methods.watch(`product.${index}.thumbnail`) ? (
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
                              src={methods.watch(`product.${index}.thumbnail`)}
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
                        <InputControl
                          name={"title"}
                          label={"Title"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"category"}
                          label={"Category"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"brand"}
                          label={"Brand"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"stock"}
                          label={"Stock"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputControl
                          name={"description"}
                          label={"Description"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"returnPolicy"}
                          label={"Return Policy"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"warrantyInformation"}
                          label={"Warranty Information"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"price"}
                          label={"Price"}
                          type={"number"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"sku"}
                          label={"Sku"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"availabilityStatus"}
                          label={"Availability Status"}
                          required
                          index={index}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <InputControl
                          name={"shippingInformation"}
                          label={"Shipping Information"}
                          required
                          index={index}
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
              {index === addMore && (
                <Box
                  key={index + "add"}
                  onClick={onAddMore}
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
              )}
              {/* <img src={AddIcon} style={{ height: 10, width: 10 }} alt="" /> */}
            </>
          );
        })}
      </Stack>
    </FormProvider>
  );
}
