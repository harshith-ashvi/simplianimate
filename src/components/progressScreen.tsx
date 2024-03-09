import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const ProgressScreen = ({
  isDownloading,
  downloadDuration,
  progress,
}: {
  isDownloading: boolean;
  downloadDuration: number;
  progress: number;
}) => {
  return (
    <AlertDialog open={isDownloading}>
      <AlertDialogContent className="flex flex-col items-center">
        <Progress value={progress} max={downloadDuration} />
        <Label>Downloading...</Label>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProgressScreen;
