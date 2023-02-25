import {
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import React, { useState, useEffect } from 'react';


const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

const {transactions} = useAuth(); 
// const [tran, setTransactions] = useState([transactions, ]);

// useEffect(() => {
//   setTransactions(tran)
//   console.log("Get trans")
// }, [tran, ]);

// const productList = transactions;
  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Transaction History</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Trnx Hash ID
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Amount
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Action Type
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Add Note
              </TableCell>
            </TableRow>
          </TableHead>

          {/* <TableBody>
            {transactions.map((t, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    <Paragraph sx={{ m: 0, ml: 4 }}>{t.hash_id}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  ${t.amount > 999 ? (t.amount / 1000).toFixed(1) + 'k' : t.amount}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {t.type ? (
                    t.type = 'Deposit' ? (
                      <Small bgcolor={bgSecondary}>Deposit</Small>
                    ) : (
                      <Small bgcolor={bgPrimary}>Withdrawl</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>Transfer</Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </ProductTable>
      </Box>
    </Card>
  );
};



export default TopSellingTable;
