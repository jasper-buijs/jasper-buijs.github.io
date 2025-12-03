"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import { IngressInfo } from "livekit-server-sdk";
import { useEffect, useState } from "react";

const CreatePage = () => {
  const room = "live-room"
  const [whipInfo, setWhipInfo] = useState<{ url: string, streamKey: string} | null>(null);
  const [rtmpInfo, setRtmpInfo] = useState<{ url: string, streamKey: string} | null>(null);
  async function fetchIngress(protocol: "whip" | "rtmp") {
    const res = await fetch(`/api/ingress?room=${room}&prot=${protocol}`);
    const data = await res.json();
    protocol == "whip" ? setWhipInfo(data) : setRtmpInfo(data);
  }

  async function fetchIngressList () {
    const res = await fetch(`/api/ingress?room=${room}&list=1`);
    const data = await res.json();
    if (res.status == 400 && data.redirect) window.location.assign(new URL(data.redirect, window.location.toString()));
    if (res.status != 200) return [] as IngressInfo[];
    return data.list as IngressInfo[];
  }
  const [ingressList, setIngressList] = useState<IngressInfo[]>();
  const [deleteUpdateCounter, setDeleteUpdateCounter] = useState<number>(0);
  useEffect(() => {
    fetchIngressList().then((l) => {
      if (!ingressList?.length || ingressList.length <= l.length) {
        setIngressList(l);
      }
    });
  }, [whipInfo, rtmpInfo, deleteUpdateCounter]);

  async function fetchDeleteIngress (ingress_id: string) {
    await fetch(`/api/ingress?id=${ingress_id}&delete=1`);
    setDeleteUpdateCounter(deleteUpdateCounter + 1);
  }

  return (
    <>
      <NavBar activePage={"none"} />
      <Paragraph title={"OBS WHIP"} emoji={"🎥"}>
        {whipInfo ? (
          <ul>
            <li><strong>Server URL:</strong> {whipInfo.url}</li>
            <li><strong>Stream Key:</strong> {whipInfo.streamKey}</li>
          </ul>
        ) : (
          <button onClick={() => fetchIngress("whip")} className={"text-[#cfb53b] underline"}>Generate Stream Credentials</button>
          // Add option to delete ingress again?
        )}
        <p>Copy these into OBS under <em>Settings &rarr; Stream</em>.</p>
      </Paragraph>
      <Paragraph title={"OBS RTMP"} emoji={"🎥"}>
        {rtmpInfo ? (
          <ul>
            <li><strong>Server URL:</strong> {rtmpInfo.url}</li>
            <li><strong>Stream Key:</strong> {rtmpInfo.streamKey}</li>
          </ul>
        ) : (
          <button onClick={() => fetchIngress("rtmp")} className={"text-[#cfb53b] underline"}>Generate Stream Credentials</button>
          // Add option to delete ingress again?
        )}
        <p>Copy these into OBS under <em>Settings &rarr; Stream</em>.</p>
      </Paragraph>
      <Paragraph title={"Ingress List"}>
        <div>Ingress List:</div>
        {ingressList?.length && ingressList.map((ingress) =>
          <div key={ingress.streamKey}>
            <div className={"inline-block mr-4"}>{ingress.streamKey}</div>
            <div className={"inline-block mr-4"}>{ingress.inputType}</div>
            <button onClick={() => fetchDeleteIngress(ingress.ingressId)}>DELETE</button>
            <br />
          </div>
        )}
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default CreatePage;