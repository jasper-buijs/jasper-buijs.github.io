"use client";

import { authClient } from "@/auth-client";
import { Search } from "lucide-react";
import { Form } from "radix-ui";
import { Avatar, Box, Button, Dialog, Flex, IconButton, Tabs, Text, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState } from "react";

enum FormError {
  NONE,
  NO_INPUT,
  FETCH_FAILED,
  NO_COURSE,
}

interface AddExamDialogProps {
  children: React.ReactNode,
  updateCallback?: () => void,
}
export function AddExamDialog({
  children,
  updateCallback,
}: AddExamDialogProps) {
  const { data: session } = authClient.useSession();
  const [open, setOpen] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [_mode, setMode] = useState<string>("man");
  const [courseName, setCourseName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [_dateEpoch, setDateEpoch] = useState<number>(0);
  const [kulId, setKulId] = useState<string>("");
  const [fetchingKulCourse, setFetchingKulCourse] = useState<boolean>(false);
  const [kulFetchError, setKulFetchError] = useState<FormError>(FormError.NONE);
  const [vubId, setVubId] = useState<string>("");
  const [fetchingVubCourse, setFetchingVubCourse] = useState<boolean>(false);
  const [vubFetchError, setVubFetchError] = useState<FormError>(FormError.NONE);

  useEffect(() => {
    if (session && session.user) setUserName(session.user.name);
  }, [session]);

  async function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoadingSubmit(true);

    const formData = new FormData(event.currentTarget);
    session && formData.append("user_id", session.user.id);
    const response = await fetch('/api/exams/addExamManual', {
      method: 'POST',
      body: formData
    });

    console.log(response.status);
    if (response.status == 200) {
      setLoadingSubmit(false);
      setOpen(false);
      updateCallback && updateCallback();
    }
  }

  async function onKulSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!courseName.trim()) {
      setKulFetchError(FormError.NO_COURSE);
      return;
    }

    setKulFetchError(FormError.NONE);
    setLoadingSubmit(true);

    const formData = new FormData(event.currentTarget);
    session && formData.append("user_id", session.user.id);
    const response = await fetch('/api/exams/addExamKul', {
      method: 'POST',
      body: formData
    });

    console.log(response.status);
    if (response.status == 200) {
      setLoadingSubmit(false);
      setOpen(false);
      updateCallback && updateCallback();
    }
  }

  async function onVubSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!courseName.trim()) {
      setVubFetchError(FormError.NO_COURSE);
      return;
    }

    setVubFetchError(FormError.NONE);
    setLoadingSubmit(true);

    const formData = new FormData(event.currentTarget);
    session && formData.append("user_id", session.user.id);
    const response = await fetch('/api/exams/addExamVub', {
      method: 'POST',
      body: formData
    });

    console.log(response.status);
    if (response.status == 200) {
      setLoadingSubmit(false);
      setOpen(false);
      updateCallback && updateCallback();
    }
  }

  async function fetchKulCourse() {
    setKulFetchError(FormError.NONE);

    const id = kulId.trim();
    if (!id) {
      setKulFetchError(FormError.NO_INPUT);
      return;
    }

    setFetchingKulCourse(true);
    try {
      const response = await fetch('/api/exams/fetchCourseKul', {
        method: 'POST',
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        setCourseName("");
        setKulFetchError(FormError.FETCH_FAILED);
        return;
      }

      const data = await response.json();
      if (!data.courseName) {
        setCourseName("");
        setKulFetchError(FormError.FETCH_FAILED);
        return;
      }

      setCourseName(data.courseName);
    } catch (error) {
      console.error("Failed to fetch KUL course", error);
      setKulFetchError(FormError.FETCH_FAILED);
    } finally {
      setFetchingKulCourse(false);
    }
  }

  async function fetchVubCourse() {
    setVubFetchError(FormError.NONE);

    const id = vubId.trim();
    if (!id) {
      setVubFetchError(FormError.NO_INPUT);
      return;
    }

    setFetchingVubCourse(true);
    try {
      const response = await fetch('/api/exams/fetchCourseVub', {
        method: 'POST',
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        setCourseName("");
        setVubFetchError(FormError.FETCH_FAILED);
        return;
      }

      const data = await response.json();
      if (!data.courseName) {
        setCourseName("");
        setVubFetchError(FormError.FETCH_FAILED);
        return;
      }

      setCourseName(data.courseName);
    } catch (error) {
      console.error("Failed to fetch VUB course", error);
      setVubFetchError(FormError.FETCH_FAILED);
    } finally {
      setFetchingVubCourse(false);
    }
  }

  return(<>
    <Dialog.Root open={open} onOpenChange={(open) => {
      if (open) {
        setMode("man");
        setOpen(true);
        setCourseName("");
        setDateEpoch(0);
        setKulId("");
        setVubId("");
      } else setOpen(false);
    }}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 350 }}>
        <Dialog.Title className={"hidden"}>Add Exam</Dialog.Title>
        <Dialog.Description className={"hidden"}>Add exam to schedule</Dialog.Description>

        <Tabs.Root
          activationMode="manual"
          defaultValue={"man"}
          onValueChange={(value) => setMode(value)}
        >
          <Tabs.List size="2" wrap="wrap" justify="center">
            <Tabs.Trigger value={"man"}>Manual</Tabs.Trigger>
            <Tabs.Trigger value={"kul"}>
              <Image className={"h-5 w-auto"} src={"/logos/exams/kul.png"} alt={"KULeuven"} width="400" height="143" />
            </Tabs.Trigger>
            <Tabs.Trigger value="vub">
              <Image className={"h-5 w-auto"} src={"/logos/exams/vub.png"} alt={"VUB"} width="954" height="425" />
            </Tabs.Trigger>
          </Tabs.List>

          <Box pt="2">
          <Tabs.Content value={"man"}>
            <Form.Root onSubmit={onSubmit}>
              <Flex direction="column" gap="4">
                <Form.Field name={"user_name"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Name</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root
                      placeholder="Your name"
                      type="text"
                      size="3"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      readOnly={userName == session?.user?.name}
                    >
                      <TextField.Slot>
                        <Avatar
                          size="2"
                          src={session?.user?.image || undefined}
                          fallback={userName ? userName[0] : "?"}
                          radius="full"
                        />
                      </TextField.Slot>
                    </TextField.Root>
                  </Form.Control>
                </Form.Field>

                <Form.Field name={"course_name"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Course</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root size="3" value={courseName} onChange={(e) => setCourseName(e.target.value)} type="text" required />
                  </Form.Control>
                  <Form.Message asChild match="valueMissing">
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a course name
                    </Text>
                  </Form.Message>
                </Form.Field>

                <Form.Field name={"exam_time"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Date</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root size="3" type="datetime-local" min={new Date().toISOString().substring(0, 16)} required />
                  </Form.Control>
                  <Form.Message asChild match="valueMissing">
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a date in the future
                    </Text>
                  </Form.Message>
                  <Form.Message asChild match="rangeOverflow">
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a date in the future
                    </Text>
                  </Form.Message>
                </Form.Field>

                <Flex direction="row" className={"mt-6 gap-3"} justify="center">
                  <Dialog.Close>
                    <Button color="gray" variant="soft" size="3">Cancel</Button>
                  </Dialog.Close>
                  <Form.Submit asChild>
                    <Button size="3" loading={loadingSubmit}>Submit</Button>
                  </Form.Submit>
                </Flex>
              </Flex>
            </Form.Root>
          </Tabs.Content>

          <Tabs.Content value={"kul"}>
            <Form.Root onSubmit={onKulSubmit}>
              <Flex direction="column" gap="4">
                <Form.Field name={"user_name"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Name</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root
                      placeholder="Your name"
                      type="text"
                      size="3"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      readOnly={userName == session?.user?.name}
                    >
                      <TextField.Slot>
                        <Avatar
                          size="2"
                          src={session?.user?.image || undefined}
                          fallback={userName ? userName[0] : "?"}
                          radius="full"
                        />
                      </TextField.Slot>
                    </TextField.Root>
                  </Form.Control>
                </Form.Field>

                <Form.Field name={"kul_course_id"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">ECTS Code</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root
                      type="text"
                      size="3"
                      value={kulId}
                      required
                      onChange={(e) => {
                        setKulId(e.target.value.trim());
                        setCourseName("");
                        setKulFetchError(FormError.NONE);
                      }}
                    >
                      <TextField.Slot side="right">
                        <IconButton type="button" size="2" variant="soft" onClick={fetchKulCourse} loading={fetchingKulCourse}>
                          <Search size="16" />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Form.Control>
                  <Form.Message asChild match={(value) => kulFetchError === FormError.NO_COURSE && value.trim() === ""} forceMatch={kulFetchError === FormError.NO_COURSE}>
                    <Text as="div" size="1" mt="1" color="red">
                      Please search for a course id
                    </Text>
                  </Form.Message>
                  <Form.Message asChild match={(value) => kulFetchError === FormError.NO_INPUT && value.trim() === ""} forceMatch={kulFetchError === FormError.NO_INPUT}>
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a course id
                    </Text>
                  </Form.Message>
                  <Form.Message asChild match={(value) => kulFetchError === FormError.FETCH_FAILED && value.trim() !== ""} forceMatch={kulFetchError === FormError.FETCH_FAILED}>
                    <Text as="div" size="1" mt="1" color="red">
                      Failed to find course. Check your ECTS code or enter your exam in the &apos;Manual&apos; tab
                    </Text>
                  </Form.Message>
                </Form.Field>

                <Form.Field name={"course_name"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Course</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root size="3" value={courseName} type="text" readOnly />
                  </Form.Control>
                </Form.Field>

                <Form.Field name={"exam_time"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Date</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root size="3" type="datetime-local" min={new Date().toISOString().substring(0, 16)} required />
                  </Form.Control>
                  <Form.Message asChild match="valueMissing">
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a date in the future
                    </Text>
                  </Form.Message>
                  <Form.Message asChild match="rangeOverflow">
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a date in the future
                    </Text>
                  </Form.Message>
                </Form.Field>

                <Flex direction="row" className={"mt-6 gap-3"} justify="center">
                  <Dialog.Close>
                    <Button color="gray" variant="soft" size="3">Cancel</Button>
                  </Dialog.Close>
                  <Form.Submit asChild>
                    <Button size="3" loading={loadingSubmit}>Submit</Button>
                  </Form.Submit>
                </Flex>
              </Flex>
            </Form.Root>
          </Tabs.Content>

          <Tabs.Content value={"vub"}>
            <Form.Root onSubmit={onVubSubmit}>
              <Flex direction="column" gap="4">
                <Form.Field name={"user_name"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Name</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root
                      placeholder="Your name"
                      type="text"
                      size="3"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      readOnly={userName == session?.user?.name}
                    >
                      <TextField.Slot>
                        <Avatar
                          size="2"
                          src={session?.user?.image || undefined}
                          fallback={userName ? userName[0] : "?"}
                          radius="full"
                        />
                      </TextField.Slot>
                    </TextField.Root>
                  </Form.Control>
                </Form.Field>

                <Form.Field name={"vub_course_id"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">VUB Course ID</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root
                      type="text"
                      size="3"
                      value={vubId}
                      required
                      onChange={(e) => {
                        setVubId(e.target.value.trim())
                        setCourseName("");
                        setKulFetchError(FormError.NONE);
                      }}
                    >
                      <TextField.Slot side="right">
                        <IconButton size="2" variant="soft" onClick={fetchVubCourse} loading={fetchingVubCourse}>
                          <Search size="16" />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Form.Control>
                  <Form.Message asChild match={(value) => vubFetchError === FormError.NO_COURSE && value.trim() === ""} forceMatch={vubFetchError === FormError.NO_COURSE}>
                    <Text as="div" size="1" mt="1" color="red">
                      Please search for a course id
                    </Text>
                  </Form.Message>
                  <Form.Message asChild match={(value) => vubFetchError === FormError.NO_INPUT && value.trim() === ""} forceMatch={vubFetchError === FormError.NO_INPUT}>
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a course id
                    </Text>
                  </Form.Message>
                  <Form.Message asChild match={(value) => vubFetchError === FormError.FETCH_FAILED && value.trim() !== ""} forceMatch={vubFetchError === FormError.FETCH_FAILED}>
                    <Text as="div" size="1" mt="1" color="red">
                      Failed to find course. Check the course id or enter your exam in the &apos;Manual&apos; tab
                    </Text>
                  </Form.Message>
                </Form.Field>

                <Form.Field name={"course_name"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Course</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root size="3" value={courseName} type="text" readOnly />
                  </Form.Control>
                </Form.Field>

                <Form.Field name={"exam_time"}>
                  <Form.Label asChild>
                    <Text as="div" size="2" mb="1" weight="bold">Date</Text>
                  </Form.Label>
                  <Form.Control asChild>
                    <TextField.Root size="3" type="datetime-local" min={new Date().toISOString().substring(0, 16)} required />
                  </Form.Control>
                  <Form.Message asChild match="valueMissing">
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a date in the future
                    </Text>
                  </Form.Message>
                  <Form.Message asChild match="rangeOverflow">
                    <Text as="div" size="1" mt="1" color="red">
                      Please enter a date in the future
                    </Text>
                  </Form.Message>
                </Form.Field>

                <Flex direction="row" className={"mt-6 gap-3"} justify="center">
                  <Dialog.Close>
                    <Button color="gray" variant="soft" size="3">Cancel</Button>
                  </Dialog.Close>
                  <Form.Submit asChild>
                    <Button size="3" loading={loadingSubmit}>Submit</Button>
                  </Form.Submit>
                </Flex>
              </Flex>
            </Form.Root>
          </Tabs.Content>
          </Box>
        </Tabs.Root>

      </Dialog.Content>
    </Dialog.Root>
  </>);
}