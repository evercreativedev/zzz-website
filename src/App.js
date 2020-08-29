import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Grid ,
  Typography,
  Button,
  Card,
  CardContent,
  Link
} from '@material-ui/core';

function App() {
  return (
    // Global grid
    <Grid
    container
    spacing={2}
    justify="center"
    alignItems="center"
    alignContent="center"
    style={{marginTop:'5%'}}>
      <Grid item xs={12} style={{textAlign:'center'}}>
        <img src="/zzz_logo.png" style={{width:'10vw'}} />
        <Typography variant="h3"> ZZZ.Finance </Typography>
        <Typography variant="h4"> What should have been. </Typography>
      </Grid>
      <Grid item xs={12} align="center" style={{marginTop:'3vh'}}>
        <Button variant="outlined" color="primary" disabled={true} style={{marginInlineEnd:'10px'}}> Uniswap </Button>
        <Button variant="outlined" color="primary" disabled={false} href="https://t.me/ZZZfinance" style={{marginInlineEnd:'10px'}}> Telegram </Button>
        <Button variant="outlined" color="primary" disabled={false} href="https://pool.zzz.finance"> Pools </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="body1"> Token Address: <Link href=" https://etherscan.io/address/0xc75F15AdA581219c95485c578E124df3985e4CE0"> 0xc75F15AdA581219c95485c578E124df3985e4CE0 </Link></Typography>
      </Grid>
      {/* Body 1 */}
      <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> What is ZZZ? </Typography>
          <Typography variant="body1">
          ZZZ is a counter to the a YFI clone OWO. ZZZ aims to be what OWO fails to be with the creation of Pool A and a working Pool B. Rewards will be sent imemdiately to
          Pool A and Pool B to immediately increase trust in the project.
          </Typography>
      </Grid>
      {/* Body 2 */}
      <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> No OTC/Dev wallet/ Presale </Typography>
          <Typography variant="body1">
          From day 0, all tokens will be sent to the reward contract. This project will follow closely the original tokenomics, 15,000 initial liqudity on uniswap along with 5,000 reserved for rewards.
          Uniswap liqudity will be locked in Pool B.
          </Typography>
      </Grid>
       {/* Body 4 */}
       <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> Tokenomics </Typography>
          <Typography variant="body1"> <strong> No OTC,DEV or Early Wallet. 100% Owned by the community</strong> </Typography>
          <Typography variant="body1">
            Total Supply: 20,000 ZZZ
          </Typography>
          <Typography variant="body1">
            Initial Supply to Uniswap: 15,000 ZZZ - 20 ETH
          </Typography>
          <Typography variant="body1">
            Supply reserved for rewards: 5000 ZZZ (5000 Pool A)
          </Typography>
      </Grid>

      {/* Body 3 */}
      <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> Pool A - 5,000 ZZZ tokens rewards</Typography>
          <Typography variant="body1">
          To contribute to Pool A, users simply have to stake their BPT tokens. BPT tokens can be obtained by providing
          liquidity to the 98% DAI - 2% ZZZ pool available on balancer. Pool A will drip rewards 3 hours after uniswap listing
          </Typography>
          <Typography variant="body2">
            Individuals who stake their BPT tokens to Pool A will be rewarded a share of 5,000 ZZZ tokens over a period of 10 weeks.
          </Typography>
      </Grid>

      {/* Body 3 */}
      <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> Pool B - 547 UNISWAP-V2 token rewards</Typography>
          <Typography variant="body1">
           Pool B will allow us to give back to the community. Users can stake their ZZZ tokens in Pool B to gain a share of the liqudity on UNISWAP-V2. Owners of the UNISWAP V2 tokens can then remove ETH/ZZZ tokens from UNISWAP, based on how much they own.
          </Typography>
          <Typography variant="body2">
            Individuals who stake their ZZZ tokens to Pool B will be rewarded a share of 547 UNISWAP-V2 tokens over a period of 10 weeks.
          </Typography>
      </Grid>



      {/* Body 4 */}
      <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> Safety </Typography>
          <Typography variant="body1">
          Liqudity tokens from Uniswap will be sent to Pool B. Hence, the only way to get ownership of this liqudity is to stake ZZZ tokens. With the fair distribution of ZZZ tokens via the initial Uniswap Sale + Pool A farming,
          this ensures that the liqudity is spread evenly to all community holders. The ZZZ token has the admin keys already burnt, and no new tokens can be minted. This makes it impossible for a third party
          to drain any liqudity pools.
          </Typography>
      </Grid>
      {/* Body 4 */}
      <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> Transactions & Addresses </Typography>
          <Typography variant="body1"> Token Address: <Link href=" https://etherscan.io/address/0xc75F15AdA581219c95485c578E124df3985e4CE0"> 0xc75F15AdA581219c95485c578E124df3985e4CE0 </Link> </Typography>
          <Typography variant="body1"> Set Owner as minter TX: <Link href="https://www.etherscan.io/tx/0xea16a85fbe9f85a0357c0b0bb6d2511f2d06d8180f9c755959b9f7649a453953"> 0xea16a85fbe9f85a0357c0b0bb6d2511f2d06d8180f9c755959b9f7649a453953</Link></Typography>
          <Typography variant="body1"> Mint 20,000 Tokens TX: <Link href="https://etherscan.io/tx/0x509d5d86bf1bc34e8b3f39647597ccf3323f46b4cf73aae9beb9521e92b0fbf6"> 0x509d5d86bf1bc34e8b3f39647597ccf3323f46b4cf73aae9beb9521e92b0fbf6</Link></Typography>
          <Typography variant="body1"> Remove Owner as minter TX: <Link href="https://etherscan.io/tx/0xa131434b42f89fa5609b4c380216a4a8cc3045c8f91e635512adeb4d4ad6f8a8">0xa131434b42f89fa5609b4c380216a4a8cc3045c8f91e635512adeb4d4ad6f8a8 </Link></Typography>
          <Typography variant="body1"> Admin Keys Burn TX: <Link href="https://etherscan.io/tx/0x06d44b27e70e18108d1fbf3a43745c244e3641e2243564bc78c01674352061cd">0x06d44b27e70e18108d1fbf3a43745c244e3641e2243564bc78c01674352061cd</Link></Typography>
          <Typography variant="body1"> 5000 Tokens to Pool A TX: <Link href="https://etherscan.io/tx/0x7bba87cf757bb171ae4c9dd1e69b9d0c08a8f75a5e5af3cba4081380593bc3fb">0x7bba87cf757bb171ae4c9dd1e69b9d0c08a8f75a5e5af3cba4081380593bc3fb</Link> </Typography>
          <Typography variant="body1"> Uniswap Liqudity lock TX to Pool B: In progress </Typography>
          <Typography variant="body1"> Pool A Address: <Link href="https://etherscan.io/address/0x2d0b69300c4637625681a19d840e8e9c1ebe4126#readContract">0x2d0b69300c4637625681a19d840e8e9c1ebe4126</Link> </Typography>
          <Typography variant="body1"> Pool B Address: <Link href="https://etherscan.io/address/0xeEE0B2ED62615441CE31c3166a4179a4B8FcE615#readContract">0xeEE0B2ED62615441CE31c3166a4179a4B8FcE615</Link> </Typography>
      </Grid>

      {/* Body 5 */}
      <Grid item xs={6} style={{textAlign:'center',marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
          <Typography variant="h4"> Disclaimer </Typography>
          <Typography variant="body1"> There is no team. No lead dev. This is a community project and can be seen by the fact that 100% of the coins is held by the community.</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
