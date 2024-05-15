import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "./../assets/home/4b24a673-11b2-4867-9e6c-1c51eb690612.jpg";
import home2 from "./../assets/home/e030820d-8691-41ea-b51d-99bea90f2e27.jpg";
import home3 from "./../assets/home/ee63ad5c-a5b8-4bfe-89e6-2b1cc351088a.jpg";
import home4 from "./../assets/home/f2252aaa-acce-4dff-a3bc-becaab828ebc.jpg";
import axios from "axios";
import { Autocomplete, InputAdornment, Paper, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CommunityWrapper from "./community/CommunityWrapper";
import homeImage from "./../assets/image/table image.webp";
import SliderImage from "./slider/Slider";
import NormalSlider from "./slider/NormalSlide";
//normalSliderImage
import image from "./../assets/tables/Somerville2str_45_2000x.webp";
import image1 from "./../assets/tables/image11.webp";
import image2 from "./../assets/tables/image12.webp";
import image3 from "./../assets/tables/image13.webp";
import image4 from "./../assets/tables/image14.webp";
import image5 from "./../assets/tables/image15.webp";
//propery image
import propertyImage from "./../assets/tables/propertType.jpg";
interface CityData {
  city: string;
  country: string;
  population: number;
}

const Home: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [allCitiesData, setAllCitiesData] = useState<CityData[] | null>(null);
  const [searchValue, setSearchValue] = useState<CityData | null>(null);

  const getCityData = () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((res: any) => {
        setAllCitiesData(res?.data?.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCityData();
  }, []);
  const images = [home1, home2, home3, home4];
  const normalSliderImages = [image, image1, image2, image3, image4, image5];
  return (
    <div className="relative">
      <SliderImage images={images} />
      <div className="text-3xl  absolute top-[130px] left-1/2 transform -translate-x-1/2 z-10 text-white">
        <div className="sm:w-[500px] xl:w-[700px]">
          <div className="px-4">
            <span className="font-bold text-[32px]">Welcome Back,</span>
            <br />
            <span className="text-[25px]">continue your home search</span>
          </div>
          {/* <div className="text-center text-[20divx] sm:inline hidden">
            Find your new construction home
          </div> */}
        </div>
        <div className="w-full mt-5 px-3 ">
          {" "}
          <Autocomplete
            options={allCitiesData || []}
            getOptionLabel={(option: CityData) => option.city}
            onChange={(event, newValue) => {
              setSearchValue(newValue);
            }}
            style={{ position: "relative" }}
            value={searchValue}
            blurOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                color="error"
                placeholder="Search With Location"
                variant="outlined"
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "white",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": {
                    outline: "none",
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                      outline: "none",
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                      outline: "none",
                    },
                }}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <button className="text-[14px] font-normal rounded-full bg-[#E81C28] px- text-white py-1">
                //         Search
                //       </button>
                //     </InputAdornment>
                //   ),
                // }}
              />
            )}
          />
        </div>
        <div className="absolute  sm:right-[80px] top-[95px] sm:inline hidden">
          {" "}
          <button className="text-[14px] font-normal rounded-full bg-[#E81C28] px-4 ">
            Search
          </button>
        </div>
      </div>

      <div className="py-10">
        <CommunityWrapper />
      </div>
      <div className="sm:py-20 py-5">
        <div className="bg-[#F3EEE2]  sm:flex gap-10 items-center justify-center px-10 py-10  sm:h-[350px] ">
          <div>
            <div className="font-bold text-[24px] font-sans sm:text-start text-center">
              2024 Virtual
            </div>
            <h2 className="text-[50px] font-bold font-serif sm:text-start text-center">
              Concept Home
            </h2>
            <p className="text-[20px] font-sans font-medium sm:text-start text-center">
              Experience the home that will grow with you.
            </p>
          </div>
          <div
            className="lg:w-[500px] sm:py-0 py-4
          "
          >
            <img src={homeImage} alt="#" className="rounded-full" />
          </div>
        </div>
      </div>
      <div className="py-10 2xl:px-[300] xl:px-[200px] lg:px-[100px] sm:px-[50px] px-6 ">
        <NormalSlider images={normalSliderImages} />
      </div>
      <div className="sm:py-20 py-5">
        <div className="bg-[#E2E5F3]  sm:flex gap-10 items-center justify-center px-10 py-10  sm:h-[350px] ">
          <div className="text-[20px] font-sans ">
            <ul className="list-disc ">
              <li>TH (Townhouse)</li>
            </ul>
            <ul className="list-disc">
              <li>Condo (Condominium)</li>
            </ul>
            <ul className="list-disc">
              <li>Condo (Condominium)</li>
            </ul>
            <ul className="list-disc">
              <li>SFH (Single Family Home)</li>
            </ul>
            <ul className="list-disc">
              <li>MH (Mobile Home)</li>
            </ul>
            <ul className="list-disc">
              <li>Stu (Studio)</li>
            </ul>
          </div>
          <div className="sm:py-0 py-4">
            <img src={propertyImage} alt="" className="h-[200px]" />
          </div>
          <div className="text-[20px] font-sans ml-6">
            <ul className="list-disc">
              <li>MF (Multi-Family)</li>
            </ul>
            <ul className="list-disc">
              <li>PUD (Planned Unit Development)</li>
            </ul>
            <ul className="list-disc">
              <li>Loft (Loft)</li>
            </ul>
            <ul className="list-disc">
              <li>Bung (Bungalow)</li>
            </ul>
            <ul className="list-disc">
              <li>Villa (Villa)</li>
            </ul>
            <ul className="list-disc">
              <li>Ranch (Ranch-style Home)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
