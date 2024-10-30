import Button from "@/components/ui/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input";
import Link from "next/link";
import { LuHome, LuLoader2 } from "react-icons/lu";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-10 p-10 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Button</CardTitle>
          <CardDescription>
            Displays a button or a component that looks like a button.
          </CardDescription>
        </CardHeader>

        <CardBody>
          <div className="space-y-4">
            <div className="space-y-2">
              <p>Variant</p>
              <div className="space-x-2">
                <Button variant="primary">primary</Button>
                <Button variant="success">success</Button>
                <Button variant="warn">warn</Button>
                <Button variant="dangger">dangger</Button>
              </div>
            </div>

            <div className="space-x-2">
              <Button variant="outline">outline</Button>
              <Button variant="ghost">ghost</Button>
              <Button variant="link">link</Button>
            </div>

            <div className="space-y-2">
              <p>Size</p>
              <div className="flex items-end space-x-2">
                <Button variant="primary" size="sm">
                  small
                </Button>
                <Button size={"icon"}>
                  <LuHome />
                </Button>
                <Button variant="primary" size="md">
                  medium
                </Button>
                <Button variant="primary" size="lg">
                  large
                </Button>
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <p>State</p>
                <div className="flex items-center space-x-2">
                  <Button disabled className="space-x-1">
                    <LuLoader2 className="animate-spin" />
                    <span>Loading</span>
                  </Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter>
          <Link
            className="text-primary ml-auto text-xs underline-offset-4 hover:underline"
            href={"/docs/button"}
          >
            View doc
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Input</CardTitle>
          <CardDescription>
            Displays an input field for users to enter data.
          </CardDescription>
          <CardBody>
            <div className="flex max-w-64 flex-col gap-3 py-5">
              <p>Size</p>
              <Input size={"sm"} placeholder="small" />
              <Input size="md" placeholder="medium" />
              <Input size="lg" placeholder="large" />
              <p>With Button</p>
              <Input withButton size={"md"} placeholder="with button" />
            </div>
          </CardBody>
        </CardHeader>
      </Card>
    </div>
  );
}
