import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { AdvertisingBanner } from "./components/AdvertisingBanner";
import { AsideBanner } from "./components/AsideBanner";
import { News } from "./components/News";
import { NewsSelector } from "./components/NewsSelector";
import { BigLink } from "./components/BigLink";
import { CurrentTime } from "./components/CurrentTime";
import { RegularLink } from "./components/RegularLink";
import { Currency } from "./components/Currency";
import { Value } from "./components/Value";
import { IdentValue } from "./components/IdentValue";
import { CurrentValue } from "./components/CurrentValue";
import { Diff } from "./components/Diff";
import { ActionCall } from "./components/ActionCall";
import { MainLogo } from "./components/MainLogo";
import { Topics } from "./components/Topics";
import { SearchForm } from "./components/SearchForm";
import { Slogan } from "./components/Slogan";
import { FooterTopic } from "./components/FooterTopic";
import { Weather } from "./components/Weather";
import { EfirButton } from "./components/EfirButton";
import { Img } from "./components/Img";
import './App.css';

export type ValueProps = {
  readonly many: "many";
  readonly different: "different";
  readonly props: "props";
};

const props: ValueProps = {
  many: "many",
  different: "different",
  props: "props",
} as const;

export default function Home() {
  return (
    <main>
      <News>
        <NewsSelector>
          <BigLink {...props} />
          <BigLink {...props} />
          <BigLink {...props} />
          <CurrentTime {...props} />
        </NewsSelector>
        <RegularLink {...props} />
        <RegularLink {...props} />
        <RegularLink {...props} />
        <RegularLink {...props} />
        <RegularLink {...props} />
        <Currency>
          <Value>
            <IdentValue {...props} />
            <CurrentValue {...props} />
            <Diff {...props} />
          </Value>
          <Value>
            <IdentValue {...props} />
            <CurrentValue {...props} />
            <Diff {...props} />
          </Value>
          <Value>
            <IdentValue {...props} />
            <CurrentValue {...props} />
            <Diff {...props} />
          </Value>
        </Currency>
      </News>
      <AsideBanner>
        <Img {...props} />
        <BigLink {...props} />
        <ActionCall {...props} />
      </AsideBanner>
      <Search>
        <MainLogo {...props} />
        <Topics>
          <BigLink {...props} />
          <BigLink {...props} />
          <BigLink {...props} />
          <BigLink {...props} />
          <BigLink {...props} />
          <BigLink {...props} />
          <BigLink {...props} />
          <BigLink {...props} />
        </Topics>
        <SearchForm {...props} />
        <Slogan {...props} />
      </Search>
      <AdvertisingBanner>
        <Img {...props} />
      </AdvertisingBanner>
      <Footer>
        <FooterTopic>
          <BigLink {...props} />
          <Weather {...props} />
        </FooterTopic>
        <FooterTopic>
          <BigLink {...props} />
          <RegularLink {...props} />
          <RegularLink {...props} />
          <RegularLink {...props} />
        </FooterTopic>
        <FooterTopic>
          <BigLink {...props} />
          <RegularLink {...props} />
        </FooterTopic>
        <FooterTopic>
          <BigLink {...props} />
          <EfirButton {...props} />
          <RegularLink {...props} />
          <RegularLink {...props} />
          <RegularLink {...props} />
        </FooterTopic>
        <FooterTopic>
          <BigLink {...props} />
          <RegularLink {...props} />
          <RegularLink {...props} />
          <RegularLink {...props} />
        </FooterTopic>
      </Footer>
    </main>
  );
}