import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function FeedbackFooter() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    console.log("Feedback submitted:", feedback);
    setFeedback("");
    setOpen(false);
  };

  return (
    <footer className="fixed bottom-0 w-full p-4 bg-gray-100 border-t flex justify-center">
      <Button onClick={() => setOpen(true)}>Give Feedback</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>We Value Your Feedback</DialogTitle>
            <DialogDescription>
              Let us know what you think!
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Type your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mt-2"
          />
          <Button onClick={handleSubmit} className="mt-4 w-full">
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </footer>
  );
}