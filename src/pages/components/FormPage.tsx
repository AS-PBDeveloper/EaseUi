import ComponentDemo from "@/pages/ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Form, Input, Button } from "@/components";
import { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  const basicFormCode = `<Form title="Contact Us" description="Please fill out the form below">
  <Input
    label="Name"
    name="name"
    placeholder="Enter your name"
    onChange={handleChange}
  />
  <Input
    label="Email"
    name="email"
    type="email"
    placeholder="Enter your email"
    onChange={handleChange}
  />
  <Button type="submit" variant="primary" size="default">
    Send Message
  </Button>
</Form>`;

  const lightFormCode = `<Form
  variant="light"
  title="Light Form"
  size="md"
>
  <Input label="Name" placeholder="Enter text" />
  <Button variant="primary" size="sm">
    Submit
  </Button>
</Form>`;

  const darkFormCode = `<Form
  variant="dark"
  title="Dark Form"
  size="md"
>
  <Input label="Email" placeholder="Enter email" />
  <Button variant="primary" size="sm">
    Submit
  </Button>
</Form>`;

  const outlineFormCode = `<Form
  variant="outline"
  title="Outline Form"
  size="md"
>
  <Input label="Field" placeholder="Enter text" />
  <Button variant="outline" size="sm">
    Submit
  </Button>
</Form>`;

  const smallFormCode = `<Form variant="light" title="Small" size="sm">
  <Input label="Name" placeholder="Enter" />
  <Button variant="primary" size="sm">
    Submit
  </Button>
</Form>`;

  const mediumFormCode = `<Form variant="light" title="Medium" size="md">
  <Input label="Name" placeholder="Enter" />
  <Button variant="primary" size="sm">
    Submit
  </Button>
</Form>`;

  const largeFormCode = `<Form variant="light" title="Large" size="lg">
  <Input label="Name" placeholder="Enter" />
  <Button variant="primary" size="sm">
    Submit
  </Button>
</Form>`;

  const propsData = [
    {
      prop: "title",
      type: "string",
      default: "undefined",
      description: "Title displayed at the top of the form",
    },
    {
      prop: "description",
      type: "string",
      default: "undefined",
      description: "Description text below the title",
    },
    {
      prop: "variant",
      type: '"light" | "dark" | "outline"',
      default: '"light"',
      description: "Visual variant of the form",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Padding size of the form",
    },
    {
      prop: "onSubmit",
      type: "(e: React.FormEvent<HTMLFormElement>) => void",
      default: "undefined",
      description: "Form submit handler",
    },
    {
      prop: "submitText",
      type: "string",
      default: '"Submit"',
      description: "Text for the submit button",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Form
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Form component for collecting user input with built-in styling and
          responsive design.
        </p>
      </div>

      <section className="space-y-4 flex flex-col gap-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Examples
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Basic Form
          </h3>
          <ComponentDemo code={basicFormCode}>
            <Form
              title="Contact Us"
              description="Please fill out the form below"
              onSubmit={handleSubmit}
              className="max-w-md"
            >
              <Input
                label="Name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" variant="primary" size="default">
                Send Message
              </Button>
            </Form>
          </ComponentDemo>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Variants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ComponentDemo code={lightFormCode}>
              <Form
                variant="light"
                title="Light Form"
                size="md"
                className="max-w-sm"
              >
                <Input label="Name" placeholder="Enter text" />
                <Button variant="primary" size="sm">
                  Submit
                </Button>
              </Form>
            </ComponentDemo>

            <ComponentDemo code={darkFormCode}>
              <Form
                variant="dark"
                title="Dark Form"
                size="md"
                className="max-w-sm"
              >
                <Input label="Email" placeholder="Enter email" />
                <Button variant="primary" size="sm">
                  Submit
                </Button>
              </Form>
            </ComponentDemo>

            <ComponentDemo code={outlineFormCode}>
              <Form
                variant="outline"
                title="Outline Form"
                size="md"
                className="max-w-sm"
              >
                <Input label="Field" placeholder="Enter text" />
                <Button variant="outline" size="sm">
                  Submit
                </Button>
              </Form>
            </ComponentDemo>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Sizes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ComponentDemo code={smallFormCode}>
              <Form variant="light" title="Small" size="sm" className="max-w-sm">
                <Input label="Name" placeholder="Enter" />
                <Button variant="primary" size="sm">
                  Submit
                </Button>
              </Form>
            </ComponentDemo>

            <ComponentDemo code={mediumFormCode}>
              <Form variant="light" title="Medium" size="md" className="max-w-sm">
                <Input label="Name" placeholder="Enter" />
                <Button variant="primary" size="sm">
                  Submit
                </Button>
              </Form>
            </ComponentDemo>

            <ComponentDemo code={largeFormCode}>
              <Form variant="light" title="Large" size="lg" className="max-w-sm">
                <Input label="Name" placeholder="Enter" />
                <Button variant="primary" size="sm">
                  Submit
                </Button>
              </Form>
            </ComponentDemo>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Props
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default FormPage;
