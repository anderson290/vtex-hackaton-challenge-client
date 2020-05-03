import { connect, ConnectOptions, LocalTrack, Room } from 'twilio-video';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject , Observable } from 'rxjs';

interface AuthToken {
    token: string;
}

export interface NamedRoom {
    id: string;
    name: string;
    maxParticipants?: number;
    participantCount: number;
}

export type Rooms = NamedRoom[];

@Injectable({
    providedIn: 'root'
})
export class VideoChatService {
    $roomsUpdated: Observable<boolean>;

    private roomBroadcast = new ReplaySubject<boolean>();

    constructor(private readonly http: HttpClient) {
        this.$roomsUpdated = this.roomBroadcast.asObservable();
    }

    private async getAuthToken() {
        const auth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2YzNjJjYTU2Y2NkOTZhOGI2ZDQ5NDYxNjEzMzM3ZTBkLTE1ODg1MzA2MDkiLCJpc3MiOiJTS2YzNjJjYTU2Y2NkOTZhOGI2ZDQ5NDYxNjEzMzM3ZTBkIiwic3ViIjoiQUNkMjNlODJjZTRiNDFhYjNlODBiODYwNTc3MjE0MWI1OCIsImV4cCI6MTU4ODUzNDIwOSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiQW5kZXJzb24iLCJ2aWRlbyI6eyJyb29tIjoic2FsYS1hbmRlcnNvbiJ9fX0.migluxnZaMily9rhjFirf_JAFJLRJ2b_Rn83ZzEdHbc';
            // await this.http
            //           .get<AuthToken>(`http://localhost:3000/twilio/token`)
            //           .toPromise();
        return auth;
    }

    getAllRooms() {

        return this.http
                   .get<Rooms>('http://localhost:3000/twilio/rooms/DailyStandup')
                   .toPromise();
    }

    async joinOrCreateRoom(name: string, tracks: LocalTrack[]) {
        let room: Room = null;
        try {
            const token = await this.getAuthToken();
            console.log(name);
            console.log(tracks);
            console.log(token);
            room =
                await connect(
                    token, {
                        name,
                        tracks,
                        dominantSpeaker: true
                    } as ConnectOptions);
                    console.log(room);
        } catch (error) {
            console.error(`Unable to connect to Room: ${error.message}`);
        } finally {
            if (room) {
                this.roomBroadcast.next(true);
            }
        }

        return room;
    }

    nudge() {
        this.roomBroadcast.next(true);
    }
}