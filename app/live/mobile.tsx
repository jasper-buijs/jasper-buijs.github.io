import { HomeActions } from "@/app/components/mobile/live/HomeActions";
import NavBar from "@/app/components/mobile/NavBar";
import { Container, Flex, Section, Text } from "@radix-ui/themes";

const MobilePage = () => {
  return (
    <>
      <NavBar activePage="none" />
      <main className={"flex flex-col items-center gap-12 absolute top-6 bottom-6 left-2 right-18"}>
        <Section size="1">
          <Container size="1">
            <Flex direction="column" align="center" gap="5">
              <Text as="div" className={"text-[#eeeef0] text-balance text-center"}>
                Welcome to our new Live platform. A lot has changed, and we are still
                working on some changes. If you find any bugs, send me a DM!
              </Text>
              <HomeActions />
            </Flex>
          </Container>
        </Section>
      </main>
    </>
  );
}

export default MobilePage