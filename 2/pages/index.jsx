import Input from "../components/core/Input";

export default function Home() {
  return (
    <div>
      <div className="px-8 py-6 bg-blue w-[600px] space-y-8">
        <Input title="Your full given name:" />
        <div className="flex space-x-8">
          <Input title="Date of Birth" calendar />
          <Input title="Country of residence or citizenship" />
        </div>
        <Input title="What school do you plan to attend?" />
        <Input
          placeholder="Enter details here"
          multiline
          title="Please take a moment to describe your intended area of study:"
        />
      </div>
    </div>
  );
}
