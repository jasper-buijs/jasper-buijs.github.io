import FooterBar from "@/app/components/FooterBar";
import { HomeActions } from "@/app/components/live/HomeActions";
import NavBar from "@/app/components/NavBar";
import { Container, Flex, Section, Separator, Text } from "@radix-ui/themes";


export default function DesktopPage() {
  return (
    <>
      <NavBar activePage={"none"} />
      <main className={"flex flex-col items-center gap-12 absolute top-20 bottom-20 left-12 right-12"}>
        <Section size="1">
          <Container size="1">
            <Flex direction="column" align="center" gap="5">
              <Text as="div" className={"text-white text-balance text-center"}>
                Welcome to our new Live platform. A lot has changed, and we are still
                working on some changes. If you find any bugs, send me a DM!
              </Text>
              <HomeActions />
            </Flex>
          </Container>
        </Section>
      </main>
      <FooterBar />
    </>
  );
}