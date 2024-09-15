import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable"; // This formats numbers with commas
import { CryptoState } from "../CryptoContext";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Roboto",
    },
    marketData: {
      alignSelf: "start",
      padding: 20,
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
  }));

  const classes = useStyles();
  if (!coin) return <LinearProgress style={{ backgroundColor: "lightblue" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          className={classes.image}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>

        <div className={classes.marketData}>
          {/* Rank */}
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>

          {/* Current Price */}
          <span style={{ display: "flex", marginTop: 10 }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          {/* Price Change (24 hours) */}
          <span style={{ display: "flex", marginTop: 10 }}>
            <Typography variant="h5" className={classes.heading}>
              Price Change (24h):
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Roboto",
                color:
                  coin?.market_data.price_change_percentage_24h >= 0
                    ? "green"
                    : "red",
              }}
            >
              {coin?.market_data.price_change_percentage_24h.toFixed(2)}%
            </Typography>
          </span>
        </div>
      </div>

      {/* Chart Component */}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
