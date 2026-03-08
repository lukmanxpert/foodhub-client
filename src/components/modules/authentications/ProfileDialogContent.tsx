"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function ProfileDialogContent() {
  const router = useRouter();
  const handleSignOut = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/signin"); // redirect to login page
          },
        },
      });
      toast.success("Logout success.", { id: toastId });
    } catch (error: any) {
      toast.success(error.message || "Something went wrong, try again.", {
        id: toastId,
      });
    }
  };
  return (
    <DialogContent className="sm:max-w-sm">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
      </DialogHeader>
      <form action="">
        <FieldGroup>
          <Field>
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
          </Field>
          <Field>
            <Label htmlFor="username-1">Username</Label>
            <Input id="username-1" name="username" defaultValue="@peduarte" />
          </Field>
        </FieldGroup>
      </form>
      <DialogFooter>
        <DialogClose>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Save changes</Button>
        <Button onClick={handleSignOut} type="submit">
          Log Out
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
