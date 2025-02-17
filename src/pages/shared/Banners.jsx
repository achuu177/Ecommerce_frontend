import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { axiosInstance } from "../../config/axiosInstance";
import { useSelector } from "react-redux";

export const Banners = ({ role = "admin" }) => {
  const { theme } = useSelector((state) => state.theme);
  const { searchResult } = useSelector((state) => state.search);

  const [banners, setBanners] = useState([]);
  const [deleteBanner, setDeleteBanner] = useState({});

  const user = {
    role: "admin",
    banners: "/banner/banners",
    searchBanner: "/banner/search-banners",
  };

  if (role === "admin") {
    user.banners = "/banner/banners";
    user.searchBanner = "/banner/search-banners";
  } else if (role === "seller") {
    user.banners = "/banner/seller-banners";
    user.searchBanner = "/banner/search-seller-banners";
  }

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axiosInstance.get(user.banners);
        setBanners(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBanners();
  }, [deleteBanner, user.banners, searchResult]);

  const handleDelete = async (bannerId) => {
    try {
      const response = await axiosInstance.delete("/banner/delete-banner", {
        data: { bannerId },
      });
      setDeleteBanner(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await axiosInstance.post(user.searchBanner, {
          searchResult,
        });
        setBanners(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchResult) {
      fetchSearchData();
    } else {
      setBanners(banners);
    }
  }, [searchResult, banners, user.searchBanner]);

  return (
    <Container style={{ minHeight: 400 }}>
      <h1 className={theme ? "text-center text-black mt-5" : "text-center text-white mt-5"}>Carousels</h1>
      <Row className="mt-4">
        {banners?.map((banner) => (
          <Col key={banner._id} md={4} className="mb-4">
            <Card className={theme ? "shadow-sm bg-light" : "shadow-sm bg-dark text-white"}>
              <Card.Img variant="top" src={banner?.image} height="200px" style={{ objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fw-bold">Title: {banner.title}</Card.Title>
                <Button
                  variant={theme ? "danger" : "secondary"}
                  className="text-white btn-sm"
                  onClick={() => handleDelete(banner._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
