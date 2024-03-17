import SubscriptionCardCom from "./SubscriptionCardCom";

export default function Page() {
  return (
    <div className="">
      <div className="bg-white p-5 m-5 rounded-xl">
        <h1 className="text-black text-2xl">Subscription</h1>
        <p>
          Take your desired plan to get access to our content easily, we like to
          offer special license offer to our users.
        </p>
      </div>
      <div className="w-full h-full flex justify-start items-center flex-wrap gap-5 m-5  ">
        <SubscriptionCardCom name="TRIAL" price={0.0} timePeriod="weekly" />
        <SubscriptionCardCom name="STARTER" price={15.0} timePeriod="monthly" />
        <SubscriptionCardCom name="PREMIUM" price={29.0} timePeriod="monthly" />
        <SubscriptionCardCom name="SMALL" price={32.0} timePeriod="monthly" />
        <SubscriptionCardCom name="BASIC" price={46.0} timePeriod="monthly" />
        <SubscriptionCardCom
          name="TESTILLA"
          price={39.0}
          timePeriod="monthly"
        />
      </div>
    </div>
  );
}
