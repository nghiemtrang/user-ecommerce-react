import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
import Loading from "../../common/components/Loading";

export default function ProductListing() {
  const { category } = useParams();
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      supabase
        .from("product")
        .select("id, title, price, thumbnail, rating, category!inner (name)")
        .eq("category.name", category),
    select: (res) => res.data,
  });

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Grid container spacing={2} py={10}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              imageUrl={product.thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
