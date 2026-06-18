class Solution {
public:
    static inline double normalize(double x) {
        x = abs(x);
        return x - (int)(x) / 360 * 360;
    }

    double angleClock(int hour, int minutes) {
        const double hourSpeed = 0.5;
        const double minuteSpeed = 6;
        double duration = hour * 60 + minutes;
        double angle = normalize(normalize(hourSpeed * duration) - normalize(minuteSpeed * duration));
        return min(360 - angle, angle);
    }
};