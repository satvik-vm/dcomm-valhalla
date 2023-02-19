import { Box } from '@mui/material';
import { MatxProgressBar, SimpleCard } from 'app/components';
import { Small } from 'app/components/Typography';
import React, { useState, useContext } from "react";
import App from "app/views/dashboard/cryptoTracker/src/App"
//import { WatchListContext } from "app/views/dashboard/cryptoTracker/context/watchListContext";

const Campaigns = () => {
  return (
    <Box>
      <SimpleCard title="Market">
        <Small color="text.secondary">Today</Small>
        <MatxProgressBar value={75} color="primary" text="BTC" />
        <MatxProgressBar value={45} color="secondary" text="ETH" />
        <MatxProgressBar value={15} color="primary" text="SOL" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="BTC" />
        <MatxProgressBar value={40} color="secondary" text="ETH" />
        <MatxProgressBar value={20} color="primary" text="SOL" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={70} color="primary" text="BTC" />
        <MatxProgressBar value={67} color="secondary" text="ETH" />
        <MatxProgressBar value={26} color="primary" text="SOL" />
      </SimpleCard>
    </Box>
  );
};

export default Campaigns;
