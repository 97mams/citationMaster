import { Card, CardHeader, CardTitle, CardContent } from "@/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>
                    Create citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action="/api/citation" method="post">
                    <div className="flex flex-col gap-2">
                        <Input placeholder="citatoin" name="citation" />
                        <Input placeholder="author" name="author" />
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}